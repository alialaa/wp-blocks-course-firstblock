// var registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocks-course/firstblock', {
	edit: function () {
		return <p className="class">Edit JSX</p>;
	},
	save: function () {
		return <p className="class">Save JSX</p>;
	},
} );
