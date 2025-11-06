import React, { useContext } from "react";
import { Avatar, Center, TextView, ThemeContext, Title, VPage } from "react-native-boxes";

export default function About() {
    const theme = useContext(ThemeContext)
    return (
        <VPage>
            <Center>
                <Avatar
                    style={{
                        width: theme.dimens.icon.xxl * 2,
                        height: theme.dimens.icon.xxl * 2,
                    }}
                    iconUrl="https://avatars.githubusercontent.com/u/16799797" />
                <Title style={{
                    fontFamily: theme.fonts.Styled,
                    fontSize: theme.dimens.font.xl * 1.5,
                }}>Shivesh Navin</Title>
                <TextView style={{
                    textAlign: 'center',
                }}>Welcome to my humble abode in the Digital World !</TextView>
            </Center>
        </VPage>
    );
}
