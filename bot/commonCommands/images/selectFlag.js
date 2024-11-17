module.exports = [{
    name: 'f',
    code: `
    $addSelectMenu[1;string;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option A:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
    `
}, {
    name: "add-select-menu",
    code: `
    Select an option.
    $addSelectMenu[1;string;yourCustomID;This is a placeholder!;1;1;false;Bandeira 1:1 bandeira:anotherCustomID:false:1253758224688091156;Bandeira 2:2 bandeira:andAnotherCustomID:true:1253757958450315416]
    `
}, {
    name: "yourCustomID",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
    $interactionReply[Hello! :);everyone;false]
    $onlyIf[$interactionData[values[0]]==anotherCustomID;]
    `
}, {
    name: "yourCustomID",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
    $interactionReply[Bye! :(;everyone;false]
    $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]
    `
}]