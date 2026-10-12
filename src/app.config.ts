export default defineAppConfig({
  pages: [
    'pages/calendar/index',
    'pages/tasks/index',
    'pages/mine/index',
    'pages/event-edit/index',
    'pages/about/index',
    'pages/weekly-poster/index'
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '明日任务',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f1f4f9'
  },
  tabBar: {
    color: '#8a93a6',
    selectedColor: '#2563eb',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/calendar/index',
        text: '日历',
        iconPath: 'assets/tabbar/calendar.png',
        selectedIconPath: 'assets/tabbar/calendar-selected.png'
      },
      {
        pagePath: 'pages/tasks/index',
        text: '任务',
        iconPath: 'assets/tabbar/tasks.png',
        selectedIconPath: 'assets/tabbar/tasks-selected.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/tabbar/mine.png',
        selectedIconPath: 'assets/tabbar/mine-selected.png'
      }
    ]
  }
})
