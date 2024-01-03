/**
 ** ## API
 **
 ** * https://develop.kde.org/docs/plasma/scripting/api/
 ** * https://develop.kde.org/docs/plasma/scripting/keys/
 ** * https://develop.kde.org/docs/plasma/scripting/examples/
 **
 **/


////////////////////////////////////////////////////////////////////////////////
/// Head: panel
//
var panel = new Panel;
var panelScreen = panel.screen;
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true};

for (i = 0; i < panelIds.length; ++i) {
	var tmpPanel = panelById(panelIds[i]);
	if (tmpPanel.screen == panelScreen) {
		// Ignore the new panel
		if (tmpPanel.id != panel.id) {
			freeEdges[tmpPanel.location] = false;
		}
	}
}




if (freeEdges["bottom"] == true) {
	panel.location = "bottom";
} else if (freeEdges["top"] == true) {
	panel.location = "top";
} else if (freeEdges["left"] == true) {
	panel.location = "left";
} else if (freeEdges["right"] == true) {
	panel.location = "right";
} else {
	// There is no free edge, so leave the default value
	panel.location = "bottom";
}
// For an Icons-Only Task Manager on the bottom, *3 is too much, *2 is too little
// Round down to next highest even number since the Panel size widget only displays
// even numbers
panel.height = 2 * Math.floor(gridUnit * 2.5 / 2);

// Restrict horizontal panel to a maximum size of a 21:9 monitor
const maximumAspectRatio = 21/9;
const geo = screenGeometry(panelScreen);
const maximumWidth = Math.ceil(geo.height * maximumAspectRatio);


panel.alignment = "center";

//
// Full
//
//panel.maximumLength = maximumWidth;
//panel.minimumLength = maximumWidth;


//
// Center
//
//panel.maximumLength = 1366;
//panel.minimumLength = 128;

//
// Center
//
panel.maximumLength = maximumWidth;
panel.minimumLength = 128;



//
/// Tail: panel
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: kickoff
//

var kickoff = panel.addWidget("org.kde.plasma.kickoff");

kickoff.currentConfigGroup = ["Shortcuts"];

kickoff.writeConfig("global", "Alt+F1");


kickoff.currentConfigGroup = ["General"];

kickoff.writeConfig("alphaSort", "true");


kickoff.writeConfig("favoritesPortedToKAstats", "false"); //Are the favorites ported to use KActivitiesStats to allow per-activity favorites
kickoff.writeConfig("favoritesDisplay", 1); //How to display favorites: 0 = Grid, 1 = List
kickoff.writeConfig("favorites", [
	"applications:org.kde.dolphin.desktop",
	"applications:org.kde.kate.desktop",
	"preferred://browser",
	"applications:org.kde.konsole.desktop",
	"applications:systemsettings.desktop",
	"applications:org.kde.discover.desktop"
]);



//
/// Tail: kickoff
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: pager
//
var pager = panel.addWidget("org.kde.plasma.pager");

pager.currentConfigGroup = ["General"];

pager.writeConfig("currentDesktopSelected", 1);
pager.writeConfig("showOnlyCurrentScreen", true);
pager.writeConfig("showWindowIcons", true);
pager.writeConfig("wrapPage", true);


//
/// Tail: pager
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: icontasks
//
var icontasks = panel.addWidget("org.kde.plasma.icontasks");

icontasks.currentConfigGroup = ["General"];

icontasks.writeConfig("forceStripes", true);
icontasks.writeConfig("maxStripes", 1);

icontasks.writeConfig("showOnlyCurrentActivity", true);
icontasks.writeConfig("showOnlyCurrentDesktop", true);
icontasks.writeConfig("showOnlyCurrentScreen", false);

icontasks.writeConfig("showToolTips", false);
icontasks.writeConfig("wheelSkipMinimized", false);


icontasks.writeConfig("launchers", [
	"applications:org.kde.dolphin.desktop",
	"applications:org.kde.kate.desktop",
	"preferred://browser",
	"applications:org.kde.konsole.desktop",
	"applications:systemsettings.desktop",
	"applications:org.kde.discover.desktop"
]);


//
/// Tail: icontasks
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
/// Head: marginsseparator
//
panel.addWidget("org.kde.plasma.marginsseparator");

//
/// Tail: marginsseparator
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: kimpanel
//

/* Next up is determining whether to add the Input Method Panel
 * widget to the panel or not. This is done based on whether
 * the system locale's language id is a member of the following
 * white list of languages which are known to pull in one of
 * our supported IME backends when chosen during installation
 * of common distributions. */

var langIds = [
	"as",	// Assamese
	"bn",	// Bengali
	"bo",	// Tibetan
	"brx",   // Bodo
	"doi",   // Dogri
	"gu",	// Gujarati
	"hi",	// Hindi
	"ja",	// Japanese
	"kn",	// Kannada
	"ko",	// Korean
	"kok",   // Konkani
	"ks",	// Kashmiri
	"lep",   // Lepcha
	"mai",   // Maithili
	"ml",	// Malayalam
	"mni",   // Manipuri
	"mr",	// Marathi
	"ne",	// Nepali
	"or",	// Odia
	"pa",	// Punjabi
	"sa",	// Sanskrit
	"sat",   // Santali
	"sd",	// Sindhi
	"si",	// Sinhala
	"ta",	// Tamil
	"te",	// Telugu
	"th",	// Thai
	"ur",	// Urdu
	"vi",	// Vietnamese
	"zh_CN", // Simplified Chinese
	"zh_TW" // Traditional Chinese
];

if (langIds.indexOf(languageId) != -1) {
	panel.addWidget("org.kde.plasma.kimpanel");
}

//
/// Tail: kimpanel
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: systemtray
//

panel.addWidget("org.kde.plasma.systemtray");

//
/// Tail: systemtray
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: digitalclock
//
var digitalclock = panel.addWidget("org.kde.plasma.digitalclock");

digitalclock.currentConfigGroup = ["Appearance"];
digitalclock.writeConfig("dateFormat", "custom");
digitalclock.writeConfig("customDateFormat", "yyyy-MM-dd");
digitalclock.writeConfig("showSeconds", true);
digitalclock.writeConfig("use24hFormat", 2);

//
/// Tail: digitalclock
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: activity
//

//panel.addWidget("org.kde.plasma.showActivityManager");

//
/// Tail: activity
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
/// Head: minimizeall
//
panel.addWidget("org.kde.plasma.minimizeall");

//
/// Tail: minimizeall
////////////////////////////////////////////////////////////////////////////////
