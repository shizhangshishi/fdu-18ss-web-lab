<?php

function filter($pdo, $continent='', $country='', $title='')
{


    $continent = $continent == '' ? '%' : $continent;

    $country = $country == '' ? '%' : $country;

    $title = $title == '' ? '%' : '%'.$title.'%';



    $sql = 'SELECT * FROM imagedetails WHERE ContinentCode LIKE "' . $continent . '" AND CountryCodeISO LIKE "' . $country . '" AND Title LIKE "' . $title . '"';


    $result = $pdo->query($sql);

    return $result;

}

?>
