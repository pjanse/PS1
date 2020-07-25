import React from "react";
import faker from "faker/locale/en_US";

import Picture from "./SubComponents/Picture";
import Description from "./SubComponents/Description";
import Friends from "./SubComponents/Friends";

function Card() {
  return (
    <div className="ui card">
      <Picture source={faker.image.avatar()} />
      <Description
        name={faker.name.findName()}
        date={faker.date.past().toDateString()}
        description={faker.name.jobTitle()}
      />
      <div className="extra content">
        <Friends num={faker.random.number(1000)}/>
      </div>
    </div>
  );
}

export default Card;