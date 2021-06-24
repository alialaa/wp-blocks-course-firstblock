import { registerBlockType } from '@wordpress/blocks';
import Edit from "./edit";
import Save from "./save";
import "./style.scss";

registerBlockType( 'blocks-course/firstblock', {
	edit: Edit,
	save: Save,
} );
