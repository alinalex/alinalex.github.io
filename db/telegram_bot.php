


<?php 

	$bot_token = '145772419:AAEs-YNvrJZXI54o6Xbfw48-iOjYqFvvaaM';
	$website = 'https://api.telegram.org/bot'.$bot_token.'/';

	$updates = file_get_contents($website.'getupdates');

	print_r($updates);

 ?>

