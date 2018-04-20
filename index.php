<html>
<head>
<link href="style.css" rel="stylesheet">
<meta charset="UTF-8">

<meta property="og:title" content="LAB by Björkelid"/>
      <meta property="og:image" content="http://bjorkelid.com/lab/logo.jpg"/>
      <meta property="og:url" content="http://bjorkelid.com/lab"/>

<title>bjorkelid.com/LAB</title>
</head>
<body>

<div id="logo"><img src="logo.jpg"></div>

<div id="projects">

	<?php
	$dir = ".";
$dh  = opendir($dir);
while (false !== ($filename = readdir($dh))) {
    $files[] = $filename;
}

$file_array = array();
foreach ($files as $file_name) {
    $file_array[filemtime($file_name)] = $file_name;
}
krsort($file_array);

	$results = $file_array; //scandir(".");

	foreach ($results as $result) {
	    if ($result === '.' or $result === '..') continue;

	    if (is_dir("." . '/' . $result)) { ?>
	       <a href="<?=$result?>" class="projectLink">
			<div class="project">
				<div class="projectTitle"><?=$result?></div>
			</div>
			</a>
	    <? }
	}

	?>

</div>


</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="script.js"></script>

</html>