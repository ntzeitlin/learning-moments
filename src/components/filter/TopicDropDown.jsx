/* eslint-disable react/prop-types */
export const TopicDropDown = ({ setTopicValue, allTopics }) => {
    return (
        <div>
            <select name="topics" className="topic-filter" onChange={event => setTopicValue(event.target.value)}>
                <option value="">Choose Topic...</option>
                {
                    allTopics.map((topicObj) => (
                        <option value={topicObj.id} key={topicObj.id}>
                            {topicObj.name}
                        </option>
                    )
                    )
                }
            </select>
        </div>
    )
}