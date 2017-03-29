<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Advanz 101 Application</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/bootstrap-select.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/style.css">

</head>
  <body>
       <div id="container">
         <h1>ADD NEW CALL</h1>
         <form method="post" action="http://localhost/sample/submit.php/application/login">
			<div id="displayframe">
				   <span id="textre" class="text-danger"></span>
				<div id="body" >
				   
				</div>
			</div>
            <div>
               <p id="new_question"><a id="anq" > + ADD NEW QUESTIONS</a></p>
               <p class="frm_bottom"><input type="button" id="save" class="frm_button" value="SAVE"><input type="button" class="frm_button" id="cancel" value="Cancel"></p>
            </div>
         </form>
      </div>

   </body>

    <script src="<?php echo base_url(); ?>assets/dist/js/bootstrap-select.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/js/bootstrap-select.js"></script>
	<script src="<?php echo base_url(); ?>assets/js/jquery-3.2.0.min.js"></script>
	<script src="<?php echo base_url(); ?>assets/js/main.js"></script>

</html>