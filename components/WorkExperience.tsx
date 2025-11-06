import React, { useContext } from "react";
import {
    Expand,
    SimpleDatalistView,
    ThemeContext
} from "react-native-boxes";

export default function WorkExperience() {
    const theme = useContext(ThemeContext);

    const workExperience = [
        {
            id: '1',
            title: 'work.paypal',
            subtitle: 'work.paypal_duration',
            description: 'work.paypal_desc'
        },
        {
            id: '2',
            title: 'work.sap',
            subtitle: 'work.sap_duration',
            description: 'work.sap_desc'
        }
    ];

    return (
        <Expand title="work.title" initialExpand={true} leftPadding={theme.dimens.space.sm} >
            <SimpleDatalistView
                items={workExperience}
                itemAdapter={(item) => ({
                    title: item.title,
                    subtitle: item.subtitle,
                    body: item.description,
                    icon: 'briefcase',
                    flexRatio: [1, 8, 1]
                })}
            />
        </Expand>
    );
}