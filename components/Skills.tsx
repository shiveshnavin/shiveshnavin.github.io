import React, { useContext } from "react";
import {
    Caption,
    CardView,
    Expand,
    HBox,
    ThemeContext
} from "react-native-boxes";

export default function Skills() {
    const theme = useContext(ThemeContext);

    const skills = [
        'Node.js', 'React', 'Android', 'Java', 'JavaScript', 'TypeScript',
        'Docker', 'GCP', 'Firebase', 'MongoDB', 'MySQL', 'Spring Boot',
        'Express.js', 'Arduino', 'IoT', 'Blockchain', 'React Native',
        'Kotlin', 'Python', 'Git', 'Jenkins', 'Kubernetes'
    ];

    return (
        <Expand title="skills.title" initialExpand={true} leftPadding={theme.dimens.space.sm} >
            <HBox style={{
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {skills.map((skill, index) => (
                    <CardView
                        key={index}
                        style={{
                            margin: theme.dimens.space.xs,
                            paddingHorizontal: theme.dimens.space.md,
                            paddingVertical: theme.dimens.space.sm,
                            backgroundColor: theme.colors.accentLight
                        }}
                    >
                        <Caption style={{
                            color: theme.colors.invert.text,
                            fontWeight: 'bold'
                        }}>
                            {`{{${skill}}}`}
                        </Caption>
                    </CardView>
                ))}
            </HBox>
        </Expand>
    );
}