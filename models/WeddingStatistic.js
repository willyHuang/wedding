module.exports = function(sequelize, DataTypes){
	var Statistic = sequelize.define('Statistic', {
		Id: {
			type: DataTypes.INTEGER,
   			primaryKey: true,
   			autoIncrement: true
			//allowNull: true
			//unique: true
		},
		Name: {
			type: DataTypes.TEXT
		},
		Phone: {
			type: DataTypes.TEXT
		},
		Participate: {
			type: DataTypes.INTEGER
		},
		Address: {
			type: DataTypes.TEXT
		},
		Family: {
			type: DataTypes.INTEGER
		},
		Count: {
			type: DataTypes.INTEGER
		}
	}, {
		timestamps: true, // 預設會有createAt、updateAt兩個記錄時間
		freezeTableName: true //db名稱是否不加s
	});

	return Statistic;
};