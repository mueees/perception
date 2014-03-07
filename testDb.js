var ProductModel = require('models/product/product')
    , EventSchemaModel = require('models/eventSchema/eventSchema')
    , mongoose = require("mongoose")
    , async = require('async')
    , logger = require('libs/log')(module);

require("mongooseDb");

ProductModel.remove({}, function(err){
    if( err ){
        logger.info("Cannot remove all Products from db");
        return false;
    }
    logger.info("All product was deleted");

    var product = new ProductModel({
        name: "testProduct",
        url: "http://batros.in.ua"
    })

    product.save(function(err){
        if( err ) {
            logger.error('Cannot save product');
            return false;
        }
        logger.info('product saved');

        EventSchemaModel.remove(function(err){
            if( err ){
                logger.info("Cannot remove all EventShema from db");
                return false;
            }
            logger.info("All EventShema was deleted");

            var eventShema = new EventSchemaModel({
                name: "onload",
                productId: product._id
            })

            eventShema.save(function(err){
                if( err ){
                    logger.info("Cannot save eventShema: " + err);
                    return false;
                }

                logger.info("eventShema was saved");
            });

        })

    });
})