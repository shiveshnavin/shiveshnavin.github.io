import React, { useContext } from "react";
import { Avatar, SimpleDatalistView, ThemeContext } from "react-native-boxes";

export default function WorkExperience() {
    const theme = useContext(ThemeContext);
    const workExperience = [
        {
            id: '1',
            title: 'work.paypal',
            image_url: 'https://www.nopcommerce.com/images/thumbs/0014294_paypal-express-payment-plugin.png',
            subtitle: 'work.paypal_duration',
            description: 'work.paypal_desc'
        },
        {
            id: '2',
            title: 'work.sap',
            image_url: 'https://pbs.twimg.com/profile_images/1813074910887223299/HGzPIJ4t_400x400.png',
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