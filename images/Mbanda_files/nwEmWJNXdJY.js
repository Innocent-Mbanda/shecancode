if (self.CavalryLogger) { CavalryLogger.start_js(["MFWfe"]); }

__d("useStoriesSuspenseNavListItemTransitionListener",["React","StoriesLoggingConstants","StoriesLoggerContext","StoriesViewerSuspenseEventEmitterContext"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h=b("React").useEffect,i=b("StoriesLoggingConstants").NAVIGATION_GESTURE;function a(){var a=g(b("StoriesLoggerContext")),c=a.logger;a=g(b("StoriesViewerSuspenseEventEmitterContext"));var d=a.listenToNavListItemTransition;h(function(){return d(function(){c.storyNavigationLog(i.NAVIGATE_AWAY)})},[d,c])}e.exports=a}),null);