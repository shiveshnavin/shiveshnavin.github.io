import React, { useContext } from "react";
import { Avatar, SimpleDatalistView, ThemeContext } from "react-native-boxes";

export default function Education() {
    const theme = useContext(ThemeContext);
    const education = [
        {
            id: '1',
            title: 'education.mtech',
            image_url: 'https://static.toiimg.com/thumb/msid-68846795,imgsize-174936,width-400,resizemode-4/68846795.jpg',
            subtitle: 'education.mtech_duration',
            description: 'education.mtech_desc'
        },
        {
            id: '2',
            title: 'education.btech',
            image_url: 'https://play-lh.googleusercontent.com/fiIEq9Dc4WKSR7nWF6vqJ6Xy-ZM8rTWL7GCsXbCSwAtjszENQ2W7RcqnAnfHUWFtsnw',
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