import { Box } from "@radix-ui/themes";

/* eslint-disable react/prop-types */
export const TopicDropDown = ({ setTopicValue, allTopics, topicValue }) => {
    return (
        <Box m="2">
            <select
                name="topics"
                onChange={(event) => setTopicValue(event.target.value)}
                value={topicValue ? topicValue : 0}
            >
                <option value="">Choose Topic...</option>
                {allTopics.map((topicObj) => (
                    <option value={topicObj.id} key={topicObj.id}>
                        {topicObj.name}
                    </option>
                ))}
            </select>
        </Box>
    );
};
