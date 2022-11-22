import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Evillcons from 'react-native-vector-icons/Evillcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

/**
 * FontAwasome will render font awesome icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const FontAwasome = ({icon, size, color}) => {
  return <FontAwesome name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * Feathar will render feather icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const Feathar = ({icon, size, color}) => {
  return <Feather name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * AntDesigne will render ant design.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const AntDesigne = ({icon, size, color}) => {
  return <AntDesign name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * Entypoo will render entyo icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const Entypoo = ({icon, size, color}) => {
  return (
    <Entypo
      style={{icon, size, color}.style}
      name={icon}
      size={size || 30}
      color={color || '#900'}
    />
  );
};
// const Evillcon=({icon,size,color})=>{
//     return(<Evillcons name={icon} size={size||30} color={color||"#900"}/>)
// }
/**
 * FontAwasome5 will render font awesome5 icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const FontAwasome5 = ({icon, size, color}) => {
  return <FontAwesome5 name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * Feathar will render fontisto icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const Fontistoo = ({icon, size, color}) => {
  return <Fontisto name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * Foundations will render foundation icon.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const Foundations = ({icon, size, color}) => {
  return <Foundation name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * Ioniconz will render Ionic icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const Ioniconz = ({icon, size, color}) => {
  return <Ionicons name={icon} size={size || 30} color={color || '#900'} />;
};
const Materiallconss = ({icon, size, color}) => {
  return (
    <Materiallcons name={icon} size={size || 30} color={color || '#900'} />
  );
};

/**
 * MaterialCommunityIconss will render material community icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const MaterialCommunityIconss = props => {
  return (
    <MaterialCommunityIcons
      name={props.icon}
      size={props.size || 30}
      color={props.color || '#900'}
    />
  );
};

/**
 * Octiconss will render octicons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const Octiconss = ({icon, size, color}) => {
  return <Octicons name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * Zociall will render zocial icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const Zociall = ({icon, size, color}) => {
  return <Zocial name={icon} size={size || 30} color={color || '#900'} />;
};

/**
 * SimpleLineIconss will render simple line icons.
 * @param {props} { icon will show the icons.
 *
 * size is used  to set the size of font.
 *
 * color is used to set the color of font.
 * @returns {JSX} returns jsx.
 */
const SimpleLineIconss = ({icon, size, color}) => {
  return (
    <SimpleLineIcons name={icon} size={size || 30} color={color || '#900'} />
  );
};

export {
  FontAwasome,
  Feathar,
  AntDesigne,
  Entypoo,
  // Evillcon,
  FontAwasome5,
  Fontistoo,
  Foundations,
  Ioniconz,
  Materiallconss,
  MaterialCommunityIconss,
  Octiconss,
  Zociall,
  SimpleLineIconss,
};
