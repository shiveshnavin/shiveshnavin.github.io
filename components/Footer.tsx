import { Link } from "expo-router";
import React, { useContext } from "react";
import {
    Box,
    Caption,
    ThemeContext
} from "react-native-boxes";

export default function Footer() {
    const theme = useContext(ThemeContext);

    return (
        <Box style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: theme.colors.accent
        }}
        >
            <Caption style={{
                textAlign: 'center',
                color: theme.colors.text,
            }}>{`${theme.i18n.t('common.footer_1')}`}&nbsp;
                <Link
                    target="_blank"
                    style={{ textDecorationLine: 'underline', marginStart: 1 }}
                    href="https://www.npmjs.com/package/react-native-boxes">react-native-boxes</Link> <br />
                {`${theme.i18n.t('common.footer_2')}`}
            </Caption>
        </Box>
    );
}