<?php
//The script writes the users resivation information to a text file called log.
$file = "Reservation log.txt";
$current = file_get_contents($file);
$current .= 'Submitted: ' .  $_POST["sTime"] . " | Name: " . $_POST["userName"] . " | Email: " . $_POST["email"] . " | Contact: " . $_POST["contact"] . " | Arrival Date: " . $_POST["aDate"] . " | Arrival Time: " . $_POST["aTime"] . " | Number of Seats: "  . $_POST["seats"] . " | Location: " . $_POST["location"] . " | Table Side: " . $_POST["tableNumber"] . " | Vegetarians: " . $_POST["vegetarians"] . "
";
file_put_contents($file, $current);
fclose($file);
?>

