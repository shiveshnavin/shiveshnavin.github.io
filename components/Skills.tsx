import React, { useContext } from "react";
import {
    Caption,
    CardView,
    HBox,
    ThemeContext
} from "react-native-boxes";

export default function Skills() {
    const theme = useContext(ThemeContext);

    const skills = [
        'Java', 'Node.js', 'React', 'React Native', 'Android', 'JavaScript', 'TypeScript', 'Python',
        'Spring Boot', 'Pandas', 'ML', 'Prompt Engineering', 'MCP',
        'Docker', 'Cloud', 'GCP', 'Firebase', 'MySQL', 'BigQuery',
        'Express.js', 'Arduino', 'IoT', 'Blockchain',
        'Kotlin', 'Git', 'CI/CD', 'Jenkins', 'Harness', 'Observability', 'Datadog', 'Grafana',
    ];
    console.log('theme.colors.invert.caption')


    return (
        <HBox style={{
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {skills.map((skill, index) => (
                <CardView
                    key={index}
                    style={{
                        margin: theme.dimens.space.sm,
                        paddingHorizontal: theme.dimens.space.md,
                        paddingVertical: theme.dimens.space.sm,
                        backgroundColor: 'rgba(230, 230, 230, 0.25)'
                    }}
                >
                    <Caption style={{
                        color: theme.colors.heading,
                        fontWeight: 'bold'
                    }}>
                        {`{{${skill}}}`}
                    </Caption>
                </CardView>
            ))}
        </HBox>
    );
}