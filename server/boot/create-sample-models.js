module.exports = function(app){
    app.datasources.mong.automigrate('test',function(err){
        if (err) throw (err);
        
        app.models.test.create([{
            name:'yeabsira'
        },
        {
            name: 'john'
        },
        {
           name: 'jane'
        }
            
        ],function(err,test){
            if (err) throw err;

           console.log('Models created:\n',test); 
        });
    });
};