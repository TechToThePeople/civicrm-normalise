<?php

require_once 'normalise.civix.php';


function normalise_civicrm_buildForm ( $formName, &$form ){
  $names = array ("CRM_Profile_Form_Edit","CRM_Contact_Form_Contact","CRM_Event_Form_Registration_Register","CRM_Contribute_Form_Contribution_Main");
  if (in_array($formName,$names)) {
    CRM_Core_Resources::singleton()->addScript(file_get_contents(dirname( __FILE__ ) ."/js/normalise.js"));
  }
}

function normalise_civicrm_pre( $op, $objectName, $id, &$params ){
  if (!is_array($params))
    return;  
  if ($objectName == "Profile") {
    $fields=array("first_name","last_name","legal_name");
    $fieldsAccronym= array("current_employer","organisation_name","nick_name");
    foreach ($params as $k => &$v) {
      if (in_array($k,$fields)) {
        if ($v == strtolower($v) || $v == strtoupper($v)) {
          $v = strtoupper($v[0]) . strtolower(substr($v,1));
        }
      }
    }
  }
}

/**
 * Implementation of hook_civicrm_config
 */
function normalise_civicrm_config(&$config) {
  _normalise_civix_civicrm_config($config);
}

/**
 * Implementation of hook_civicrm_install
 */
function normalise_civicrm_install() {
  return _normalise_civix_civicrm_install();
}

/**
 * Implementation of hook_civicrm_enable
 */
function normalise_civicrm_enable() {
  return _normalise_civix_civicrm_enable();
}
