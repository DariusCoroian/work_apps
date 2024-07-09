const { title } = require('process');
const { Sequelize ,DataTypes} = require('sequelize');
const connection = async () => {
    const sequelize = new Sequelize('library', 'postgres', 'darius', {
        host: 'localhost',
        dialect:'postgres'
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    const User=sequelize.define(
        'User',
        {   id:{
                type:DataTypes.BIGINT,
                primaryKey:true,
                autoIncrement:true
            },
            name:{
                type:DataTypes.STRING(50),
                allowNull:false
            },
            email:{
                type:DataTypes.STRING(50),
                allowNull:false
            }
        }
    )
    
    const Post = sequelize.define(
        'Post',
        {
            id:{
                type:DataTypes.BIGINT,
                primaryKey:true,
                autoIncrement:true
            },
            title:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            content:{
                type:DataTypes.STRING,
                allowNull:false
            }
        }
    )
    User.hasMany(Post);
    Post.belongsTo(User);
    User.sync();
    Post.sync();

    // const user1 = User.create({name:'darius',email:'darius@yahoo.com'});
    // const post = Post.create({
    //     title:'ceva faina',
    //     content:'ceva content aici',
    //     UserId:1
    // })
    const users = await User.findAll();
    await User.update(
        {email:'unknown@yahoo.com'},
        {where:{
            email:'darius@yahoo.com'
        }
        }
    );
    await User.destroy({
        where:{
            name:'marius'
        }
    });

    const userFetched = await User.findOne({
        where: {
            name: 'darius'
        }
    });

    if (userFetched) {
        const posts = await userFetched.getPosts();
        console.log(posts);
    } else {
        console.log('User not found');
    }
    
}
module.exports = {connection}    