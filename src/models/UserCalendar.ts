import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connectionToDB';

class UserCalendar extends Model {
  public userId!: string;
  public countryCode!: string;
  public year!: number;
  public holidays!: string;
}

UserCalendar.init(
  {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holidays: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'UserCalendar',
  }
);

export default UserCalendar;
