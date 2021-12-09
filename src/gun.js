exports.mod = (mod_data) => {
    let base = fileIO.readParsed(global.db.user.cache.items);

    for (let file in base.data) {
        let fileData = base.data[file];
        if (fileData._id === "5fb64bc92b1b027b1f50bcf2") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundVector45");
        }
		if (fileData._id === "5fc3e272f8b6a877a729eac5") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("UMP4550m");
        }
		if (fileData._id === "5abccb7dd8ce87001773e277") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundAPS");
        }
		if (fileData._id === "5a17f98cfcdbcb0980087290") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundAPS");
        }
		if (fileData._id === "56e0598dd2720bb5668b45a6") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundAPS");
        }
		if (fileData._id === "5448bd6b4bdc2dfc2f8b4569") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundAPS");
        }
		if (fileData._id === "579204f224597773d619e051") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundAPS");
        }
		if (fileData._id === "5fc22d7c187fea44d52eda44") {
            fileData._props.Slots[1]._props.filters[0].Filter.push("mk25");
			fileData._props.Slots[1]._props.filters[0].Filter.push("mk50");
        }
		if (fileData._id === "576165642459773c7a400233") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("Saiga20");
        }
    }
    fileIO.write(global.db.user.cache.items, base);
    logger.logSuccess(`The Mag Project Has Been Injected To All Associated Weapons!`);
}