// Ours
import { Theme } from '../types';
import { alignContent } from './alignContent';
import { alignItems } from './alignItems';
import { alignSelf } from './alignSelf';
import { backgroundColor } from './backgroundColor';
import { borderColor } from './borderColor';
import { borderRadius } from './borderRadius';
import { borderStyle } from './borderStyle';
import { borderWidth } from './borderWidth';
import { display } from './display';
import { flex } from './flex';
import { flexDirection } from './flexDirection';
import { flexGrow } from './flexGrow';
import { flexShrink } from './flexShrink';
import { flexWrap } from './flexWrap';
import { fontSize } from './fontSize';
import { fontStyle } from './fontStyle';
import { fontVariant } from './fontVariant';
import { fontWeight } from './fontWeight';
import { height } from './height';
import { justifyContent } from './justifyContent';
import { letterSpacing } from './letterSpacing';
import { lineHeight } from './lineHeight';
import { margin } from './margin';
import { maxHeight } from './maxHeight';
import { maxWidth } from './maxWidth';
import { minHeight } from './minHeight';
import { minWidth } from './minWidth';
import { opacity } from './opacity';
import { overflow } from './overflow';
import { padding } from './padding';
import { position } from './position';
import { rotate } from './rotate';
import { scale } from './scale';
import { skew } from './skew';
import { textAlign } from './textAlign';
import { textAlignVertical } from './textAlignVertical';
import { textColor } from './textColor';
import { textDecoration } from './textDecoration';
import { textTransform } from './textTransform';
import { topRightBottomLeft } from './topRightBottomLeft';
import { translate } from './translate';
import { width } from './width';
import { zIndex } from './zIndex';

export default (theme: Theme) => ({
	...alignContent(),
	...alignItems(),
	...alignSelf(),
	...backgroundColor(theme),
	...borderColor(theme),
	...borderRadius(theme),
	...borderStyle(),
	...borderWidth(theme),
	...display(),
	...flex(theme),
	...flexDirection(),
	...flexGrow(theme),
	...flexShrink(theme),
	...flexWrap(),
	...fontSize(theme),
	...fontStyle(),
	...fontVariant(),
	...fontWeight(theme),
	...height(theme),
	...justifyContent(),
	...letterSpacing(theme),
	...lineHeight(theme),
	...margin(theme),
	...maxHeight(theme),
	...maxWidth(theme),
	...minHeight(theme),
	...minWidth(theme),
	...opacity(theme),
	...overflow(),
	...padding(theme),
	...position(),
	...rotate(theme),
	...scale(theme),
	...skew(theme),
	...textAlign(),
	...textAlignVertical(),
	...textColor(theme),
	...textDecoration(),
	...textTransform(),
	...topRightBottomLeft(),
	...translate(theme),
	...width(theme),
	...zIndex(theme),
});
