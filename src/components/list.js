import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Egg from './list/egg';
import "./list/list.css";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs : [{
          eggTitle : "할 일 목록1",
          deadline : "7일 남음",
          todos : [
            {content: "동해물과 백두산이 마르고 닳도록", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "울릉도 동남쪽 뱃길 따라 이백리", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "아름다운 이 땅에 금수강산에", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."}
          ],
          penalty : "미정",
          group : "그룹",
          createdDate : "2019/1/1 오후 10:10"
        },
        {
          eggTitle : "To-do List 1",
          deadline : "마감",
          todos : [
            {content: "Spooky scary skeleton", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "Beep beep I'm a sheep", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "So very totally cool", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "You are a pirate", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."}
          ],
          penalty : "4 dollar",
          group : "HANSUNG",
          createdDate : "2019/2/2 오전 11:11"
        },
        {
          eggTitle : "STONES 할 일",
          deadline : "9999일 남음",
          todos : [
            {content: "알고리즘 문제 풀기", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "IT 정보 조사해오기", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "각자 하고싶은 공부 하기", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."}
          ],
          penalty : "건수 당 1000원, 3000원, 5000원",
          group : "STONES",
          createdDate : "2019/11/4 오전 9:40"
        },
        {
          eggTitle : "To-do List 2",
          deadline : "21일 남음",
          todos : [
            {content: "Spooky scary skeleton", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "Beep beep I'm a sheep", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "So very totally cool", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "You are a pirate", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."}
          ],
          penalty : "4 dollar",
          group : "HANSUNG",
          createdDate : "2019/11/8 오전 11:17"
        },
      ],
      index : [0, 1, 2, 3],
      visibleList : [0, 1, 2, 3],
      groups : [{
          groupName: "그룹",
          members: [
            {memberName: "멤버1"},
            {memberName: "멤버2"}
          ]
        },
        {
          groupName: "HANSUNG",
          members: [
            {memberName: "한성인1"},
            {memberName: "한성인2"},
            {memberName: "한성인3"}
          ]
        },
        {
          groupName: "STONES",
          members: [
            {memberName: "권대환"},
            {memberName: "김진우"},
            {memberName: "박윤아"},
            {memberName: "정서영"}
          ]
        },
      ],
      groupIndex : [0, 1, 2]
    }
  }

  selectGroup = e => {
    var groupName = e.target.value;
    var egg = this.state.eggs;
    var idx = this.state.index;
    
    var visible;
    if(groupName === "groupAll") {
      visible = idx;
    } else {
      visible = idx.map(i => (egg[i].group === groupName) ? i : -1);
    }
    this.setState({
      visibleList: visible
    });
  }

  selectEnded = e => {
    var option = e.target.value;
    var egg = this.state.eggs;
    var idx = this.state.index;
    var visible;
    
    if(option === "end") {
      visible = idx.map(i => (egg[i].deadline === "마감") ? i : -1);
    } else if(option === "notEnd") {
      visible = idx.map(i => (egg[i].deadline !== "마감") ? i : -1);
    } else {
      visible = this.state.index;
    }
    this.setState({visibleList: visible});
  }

  render() {
    var egg = this.state.eggs;
    var group = this.state.groups;

    return (
      <div>
        <Typography variant="h3" align="center">내 에그 목록</Typography>
        <hr />
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <p>그룹 : </p>
          <select onChange={this.selectGroup.bind(this)}>
            <option value="groupAll">전체</option>
            {this.state.groupIndex.map(i => <option value={group[i].groupName}>{group[i].groupName}</option>)}
          </select>
          <p>마감 : </p>
          <select onChange={this.selectEnded.bind(this)}>
            <option value="deadlinAll">전체</option>
            <option value="end">마감</option>
            <option value="notEnd">진행중</option>
          </select>
          <p>정렬 : </p>
          <select>
            <option value="regDesc">등록 날짜 내림차순</option>
            <option value="regAsc">등록 날짜 오름차순</option>
            <option value="deadlineDesc">남은 일수 내림차순</option>
            <option value="deadlineAsc">남은 일수 오름차순</option>
          </select>
        </Grid>
        <hr />
        <Grid
          container justify="center"
          spacing={3}
          direction="column"
          alignItems="center">
          {this.state.visibleList.map(i => (i !== -1) ? <Egg oneEgg = {egg[i]} groups = {group}/> : null)}
        </Grid>
      </div>
    )
  }
}