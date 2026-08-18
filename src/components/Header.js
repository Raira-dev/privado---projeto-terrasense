import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
export default function Header({dark,onMenu,onToggleTheme,title=""}){const theme=dark?colors.dark:colors.light;return <View style={[s.header,{backgroundColor:theme.lavender}]}><Pressable onPress={onMenu} style={s.menu}><Text style={[s.menuText,{color:theme.text}]}>☰</Text></Pressable><Text style={[s.title,{color:theme.text}]}>{title}</Text><Pressable onPress={onToggleTheme} style={[s.theme,{backgroundColor:theme.mint}]}><Text>{dark?"☀️":"🌙"}</Text></Pressable></View>}
const s=StyleSheet.create({header:{height:68,paddingHorizontal:16,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},menu:{width:46,alignItems:"flex-start",paddingVertical:8},menuText:{fontSize:28},title:{flex:1,textAlign:"center",fontSize:19,fontWeight:"800"},theme:{width:42,height:42,borderRadius:21,alignItems:"center",justifyContent:"center"}});
