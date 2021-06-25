import React, { Component } from 'react'
import  './App.css'
import ff14 from "./image/ff14.png";
import ff141 from "./image/ff141.jpg";
import ff142 from "./image/ff142.jpg";
import ff143 from "./image/ff143.png"

export class App extends Component {
  state = {
    colorList: ["orange", "pink", "purple"],
    backgroundColorInput: "",
  };

  handleOnBackgroundChange=(color) => {
    // console.log(color)
    this.setState ({
      backgroundColorInput: color,
    })
  }

  render() {
    return (
      <div className={"all"}>
        <div className={"header"}>Jeremy Barbosa</div>
        <div className="container">
          
        </div>
        <div className={"center"}>
          <div className="sidebar"style={{ backgroundColor: this.state.backgroundColorInput }}
          >
            <h3> SideBar</h3>
            <ul className={"color"}>
              {this.state.colorList.map((item, index) => {
                // map creates a new array based on what we are looking for.
                return (
                  <li
                    key={index}
                    onClick={() => this.handleOnBackgroundChange(item)}
                  >
                    {item}
                  </li> // the new array will give each color a onClick function that will take in handle the function handleOnBackgroundChange.
                );
              })}
            </ul>
          </div>
          <div className={"body"}>
            <img
              className={"img"}
              src={ff14}
              alt=""
            />
            <p>Final Fantasy XIV: Shadowbringers[a] is the third expansion pack to Final Fantasy XIV, a massively multiplayer online role-playing game (MMORPG) developed and published by Square Enix for Microsoft Windows, macOS, and PlayStation 4. It was released on July 2, 2019, two years after Stormblood, the previous expansion. Like its predecessors, Naoki Yoshida served as director and producer and Masayoshi Soken composed the soundtrack. The expansion pack was released as a standalone product for current players; for new players, the "Complete Edition" that originally launched with Heavensward was updated to include all expansions including Shadowbringers.

Shadowbringers takes place on the First, a parallel dimension that has succumbed to apocalyptic collapse. Players are transported to this world and embark on a quest to restore vitality to the ruined land. They are joined by old comrades who have been trapped on the First, as well as Emet-Selch, an immortal villain who aims to harness the First's desolation to trigger a mirrored calamity on the player's home world. Emet-Selch accompanies the player, confident in the success of his plan regardless of the player's meddling. In addition to adding new areas, the expansion pack increases the level cap, debuts two character classes and two playable races, and introduces the ability to explore dungeons with non-playable "Trust" companions.

Shadowbringers was well received upon release and earned nominations for "Expansion of the Year". Critics praised the story as well as the game's accessibility to new players, both of which were focuses during development. In December 2019, Square Enix announced that the title had reached a cumulative total of 18 million player accounts. As with its predecessors, major content patches were scheduled for every three months. These updates expanded the main story, added new features, and premiered secondary storylines including a crossover written by Yoko Taro that features characters and elements from Nier: Automata and the Restoration of Ishgard, a long term campaign to rebuild the embattled nation in the aftermath of the Dragonsong War. The third major content patch had its release delayed by two months due to the COVID-19 pandemic.</p>
            <div className={"squares"}>
              <div className={"img"}>
                <img
                  className={"img"}
                  src={ff141}
                  alt=""
                />
                
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src={ff142}
                  alt=""
                />
                
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src={ff143}
                  alt=""
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className={"footer"}>
          <p>&copy; Jeremy Barbosa</p>
        </div>
      </div>
    );
  }
}

export default App
