// 사이드바에 필요한 상태

// 내브바에 버튼을 눌렀는지 아닌지
// 내브바 모두 버튼을 누르면
// 사이드바 출현
// 사이드바 닫기 버튼 누르면
// 사이드바 닫힘
// 모두보기를 눌렀는지 아닌지
// 모두보기를 누르면
// 메뉴 다 보임
// 메뉴를 클릭했는지 아닌지
// 메뉴를 누르면// 누른 것의 상태가 변경되면
// 하위 메뉴가 새로 렌더링됨

export class SideBarModel {
  constructor() {
    this.state = {
      isSideBarOpen: false,
      isExpanded: false,
      //   currentMenu,
    };
    this.data = {
      digital: {},
      shopping: {},
      collapsible: {},
    };

    this.data;
    // this.data;
    this.subList = [];
  }
  setJsonData(obj) {
    this.data.digital = obj.digital
    this.data.shopping = obj.shopping
    this.data.collapsible = obj.collapsible
    // return this.data 
  }

  getJsonData() {
    console.log(this.data);
    return this.data;
  }

  setSideBarOpenState() {
    this.state.isSideBarOpen = !this.state.isSideBarOpen;
  }

  getSideBarOpenState() {
    return this.state.isSideBarOpen;
  }

  setExpandedState() {
    this.state.isExpanded = !this.state.isExpanded;
  }

  getExpandedState() {
    return this.state.isExpanded;
  }

  setCurrentMenu(menuText) {
    this.state.currentMenu = menuText;
  }
  getSubList(menuObj) {
    return Object.keys(menuObj);
  }

  async getAll() {
    return this.users;
  }

  async getById(id) {
    return this.users.find(user => user.id === id);
  }

  async add(user) {
    this.users.push(user);
  }

  async update(id, user) {
    const index = this.users.findIndex(u => u.id === id);
    this.users[index] = user;
  }

  async delete(id) {
    const index = this.users.findIndex(u => u.id === id);
    this.users.splice(index, 1);
  }
}
