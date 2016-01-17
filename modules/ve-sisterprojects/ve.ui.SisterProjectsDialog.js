/**
 * Wikibase sisterprojects editing tool.
 *
 * @class
 * @extends OO.ui.Dialog
 *
 * @constructor
 * @param {Object} [element]
 */
ve.ui.SisterProjectsDialog = function VeUiSisterProjectsDialog() {
	ve.ui.SisterProjectsDialog.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.SisterProjectsDialog, OO.ui.ProcessDialog );

ve.ui.SisterProjectsDialog.static.name = 'sisterprojects';
ve.ui.SisterProjectsDialog.static.title = OO.ui.deferMsg( 'wikibase-ve-sisterprojects-dialog-title' );
ve.ui.SisterProjectsDialog.static.size = 'medium';

ve.ui.SisterProjectsDialog.static.actions = [
	{
		label: OO.ui.deferMsg( 'wikibase-ve-sisterprojects-dialog-action-cancel' ),
		flags: [ 'safe' ],
		modes: [ 'edit' ]
	}
];

ve.ui.SisterProjectsDialog.prototype.initialize = function() {
	ve.ui.SisterProjectsDialog.super.prototype.initialize.call( this );

	this.content = new OO.ui.PanelLayout( {
		$: this.$,
		padded: true,
		expanded: false
	} );

	this.content.$element.append( '<h3>Sister projects</h3>' );
	this.$body.append( this.content.$element );
};

ve.ui.windowFactory.register( ve.ui.SisterProjectsDialog );
