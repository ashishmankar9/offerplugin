<?php
class Dashboard extends CI_Controller{

	/*public function __construct(){
		parent::__contruct();
	}*/

	public function index(){

		$this->load->view('inc/header_view');
		$this->load->view('inc/footer_view');

	}

}