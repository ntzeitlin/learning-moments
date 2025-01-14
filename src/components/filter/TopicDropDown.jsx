/* eslint-disable react/prop-types */
export const TopicDropDown = ({ setTopicValue, allTopics, topicValue }) => {
    return (
        <div>
            <select
                name="topics"
                className="topic-filter"
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
        </div>
    );
};
