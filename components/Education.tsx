import React, { useContext } from "react";
import { Avatar, SimpleDatalistView, ThemeContext } from "react-native-boxes";

export default function Education() {
    const theme = useContext(ThemeContext);
    const education = [
        {
            id: '1',
            title: 'education.mtech',
            image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png',
            subtitle: 'education.mtech_duration',
            description: 'education.mtech_desc'
        },
        {
            id: '2',
            title: 'education.btech',
            image_url: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Maharaja_Surajmal_Institute_of_Technology_official_logo.jpg',
            subtitle: 'education.btech_duration',
            description: 'education.btech_desc'
        }
    ];

    return (
        <SimpleDatalistView
            items={education}
            itemAdapter={(item) => ({
                title: item.title,
                subtitle: item.subtitle,
                body: item.description,
                icon: (
                    <Avatar style={{
                        padding: theme.dimens.space.md,
                        backgroundColor: theme.colors.invert.forground,
                        marginRight: theme.dimens.space.lg,
                        borderRadius: theme.dimens.space.md,
                        borderColor: theme.colors.text,
                    }}
                        iconUrl={item.image_url}
                        iconText="AC" />
                ),
                flexRatio: [4, 8, 1]
            })}
        />
    );
}