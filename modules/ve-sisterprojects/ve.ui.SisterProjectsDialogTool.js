/**
 * Wikibase sister projects editing tool.
 *
 * @class
 * @extends OO.ui.WindowTool
 * @constructor
 * @param {OO.ui.Toolbar} toolbar
 * @param {Object} [config] Configuration options
 */
ve.ui.SisterProjectsDialogTool = function VeUiSisterProjectsDialogTool() {
	ve.ui.SisterProjectsDialogTool.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.SisterProjectsDialogTool, ve.ui.WindowTool );

ve.ui.SisterProjectsDialogTool.static.name = 'sisterprojects';
ve.ui.SisterProjectsDialogTool.static.group = 'utility';
ve.ui.SisterProjectsDialogTool.static.icon = 'alert';
ve.ui.SisterProjectsDialogTool.static.title = OO.ui.deferMsg(
	'wikibase-ve-sisterprojects-dialog-toolbarbutton'
);

ve.ui.SisterProjectsDialogTool.static.commandName = 'sisterprojects';
ve.ui.SisterProjectsDialogTool.static.autoAddToCatchall = false;
ve.ui.SisterProjectsDialogTool.static.autoAddToGroup = false;

ve.init.mw.DesktopArticleTarget.static.actionGroups[1]['include'].push( 'sisterprojects' );

/* Registration */
ve.ui.toolFactory.register( ve.ui.SisterProjectsDialogTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'sisterprojects', 'window', 'open',
		{ args: [ 'meta', { page: 'sisterprojects' } ] }
	)
);
