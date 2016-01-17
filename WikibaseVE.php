<?php

if ( function_exists( 'wfLoadExtension' ) ) {
	if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
		require_once __DIR__ . '/vendor/autoload.php';
	}

	wfLoadExtension( 'WikibaseVE', __DIR__ . '/extension.json' );

	// Resource loader modules
	$wgResourceModules = array_merge(
		$wgResourceModules,
		require_once __DIR__ . '/resources.php'
	);
} else {
	die( 'WikibaseVE requires MediaWiki 1.25+' );
}
