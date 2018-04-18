import React from 'react';
import { Grid, List } from 'antd-mobile'
class AvatarSelector extends React.Component {
    constructor(props){
       super(props)
       this.state = {}
    }
    render() { 
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map(v => ({
            icon:require(`../img/${v}.png`),
            text:v
        }))
        const gridHeader = this.state.text
                            ?(<div>
                                <span>已选择头像</span>
                                <img style={{width:20}} src={this.state.icon} alt=""/>
                            </div>):<div>请选择头像</div>;

        return (
            <div>
              <List renderHeader={()=> gridHeader}></List>
              <Grid data={avatarList} columnNum={5} 
                  onClick={elm => {
                  this.setState(elm)
                  this.props.selectAvatar(elm.text)}}></Grid>
                头像选择
            </div>
          )
    }
}
 
export default AvatarSelector;