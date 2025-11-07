import React from "react";
import { SimpleDatalistView } from "react-native-boxes";

export default function WorkExperience() {
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
    );
}