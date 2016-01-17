<?php

return call_user_func( function() {
	preg_match( '+' . preg_quote( DIRECTORY_SEPARATOR ) . '(?:vendor|extensions)'
		. preg_quote( DIRECTORY_SEPARATOR ) . '.*+', __DIR__, $remoteExtPath );

	$moduleTemplate = array(
		'localBasePath' => __DIR__,
		'remoteExtPath' => '..' . $remoteExtPath[0],
	);

	return array(
		'wikibase.ve.sisterprojects' => $moduleTemplate + array(
			'scripts' => array(
				'modules/ve-sisterprojects/ve.ui.SisterProjectsDialog.js',
				'modules/ve-sisterprojects/ve.ui.SisterProjectsDialogTool.js',
				'modules/ve-sisterprojects/ve.ui.SisterProjectsPage.js'
			),
			'dependencies' => array(
				'ext.visualEditor.mwcore',
				'ext.visualEditor.desktopArticleTarget'
			),
			'messages' => array(
				'wikibase-ve-sisterprojects-dialog-action-cancel',
				'wikibase-ve-sisterprojects-dialog-meta-section',
				'wikibase-ve-sisterprojects-dialog-title',
				'wikibase-ve-sisterprojects-dialog-toolbarbutton'
			),
			'target' => array( 'desktop' )
		)
	);
} );
