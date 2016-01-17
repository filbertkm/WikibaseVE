/**
 * Wikibase sisterprojects editing tool.
 *
 * @class
 * @extends OO.ui.PageLayout
 *
 * @constructor
 * @param {string} name
 * @param {Object} [element]
 */
ve.ui.SisterProjectsPage = function VeUiSisterProjectsPage( name, config ) {
	OO.ui.PageLayout.call( this, name, config );

	this.$element.append( $( '<span>' ).text( 'sister projects!' ) );
};

/* Inheritance */

OO.inheritClass( ve.ui.SisterProjectsPage, OO.ui.PageLayout );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.SisterProjectsPage.prototype.setOutlineItem = function ( outlineItem ) {
	OO.ui.PageLayout.prototype.setOutlineItem.call( this, outlineItem );

	if ( this.outlineItem ) {
		this.outlineItem
			.setIcon( 'textLanguage' )
			.setLabel( ve.msg( 'wikibase-ve-sisterprojects-dialog-meta-section' ) );
	}
};
