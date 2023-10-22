<?php

$APIPassword = "4CE2F41CAACBDC4BF63327C3B";
$APIUserName = '6E67A9F4-AE5B-4724-9E64-E599F0983F15';
$Crypt = true;
$MerchantTransactionId="1";
$UniqueMessageId="1";
$Provider="servipag";
$Currency="MXN";
$Amount="10.55";
$Hash="";

$ns = 'https://sandboxapi.dineromail.com/';
$wsdlPath="https://sandboxapi.dineromail.com/DMAPI.asmx?WSDL";

try
{	
	$Hash=$MerchantTransactionId.$UniqueMessageId.$Currency.$Amount.$Provider.$APIPassword;
	$Hash=MD5($Hash);
	
	if ($Crypt==true)
	{
		$MerchantTransactionId = encryptTripleDES($APIPassword,$MerchantTransactionId);
		$UniqueMessageId =encryptTripleDES($APIPassword,$UniqueMessageId);
		$Provider=encryptTripleDES($APIPassword,$Provider);
		$Currency=encryptTripleDES($APIPassword,$Currency);
		$Amount=encryptTripleDES($APIPassword,$Amount);
	}
			
	$soap_options = array('trace' =>1,'exceptions'=>1);	
	$client = new SoapClient($wsdlPath,$soap_options); 	
	
	$credential = new SOAPVar(array('APIUserName' => $APIUserName,
									'APIPassword'=> $APIPassword)
									, SOAP_ENC_OBJECT, 'APICredential', $ns);
									
							
	$request = array('Credential' =>$credential
					,'Crypt' =>  $Crypt
					,'MerchantTransactionId' => $MerchantTransactionId
					,'UniqueMessageId' => $UniqueMessageId
					,'Provider' => $Provider
					,'Amount' => $Amount
					,'Currency' => $Currency
					,'Hash' => $Hash);	
	
	$result = $client->GetPaymentTicket($request);
	
	echo "<br/>";
	echo "MerchantTransactionId: " . $result->GetPaymentTicketResult->MerchantTransactionId . "<br/>";
	echo "Status: " . $result->GetPaymentTicketResult->TransactionId . "<br/>";
	echo "Message: " . $result->GetPaymentTicketResult->Message . "<br/>";
	echo "Status: " . $result->GetPaymentTicketResult->Status . "<br/>";
	echo "TransactionId: " . $result->GetPaymentTicketResult->TransactionId . "<br/>";
	echo "BarcodeDigits: " . $result->GetPaymentTicketResult->BarcodeDigits . "<br/>";
	echo "BarcodeImageUrl: " . $result->GetPaymentTicketResult->BarcodeImageUrl . "<br/>";
	echo "VoucherUrl: " . $result->GetPaymentTicketResult->VoucherUrl . "<br/>";
	
}
catch (SoapFault $sf)
{
	echo "faultstring:". $sf->faultstring;
}

function encryptTripleDES($key, $text){
	
	$vector = "uL%&(#(f";
    
	$td = mcrypt_module_open (MCRYPT_3DES, '', MCRYPT_MODE_CBC, '');

    // Complete the key
    $key_add = 24-strlen($key);
    $key .= substr($key,0,$key_add);

    // Padding the text
    $text_add = strlen($text)%8;
    for($i=$text_add; $i<8; $i++){
        $text .= chr(8-$text_add);
    }

    mcrypt_generic_init ($td, $key, $vector);
    $encrypt64 = mcrypt_generic ($td, $text);
    mcrypt_generic_deinit($td);
    mcrypt_module_close($td);

     // Return the encrypt text in 64 bits code
    return base64_encode($encrypt64);
}

?>





