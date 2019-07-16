{
  init: function (args){
    var gridModelRewriter = function (model) {
        if(Array.isArray(model.columns) && model.columns.length > 2){
            model.columns[1].customFormatter = function(p){ 
                var url = "/form/DocumentEdit/" + p.row.Id;
                if(args.state.app.impersonatedUserId) {
                    url += "/?impersonatedUserId=" + args.state.app.impersonatedUserId;
                }
                return DWKitApp.API.createElement("a", { href: url}, p.value);
            };
        }
        return model; 
    };
    DWKitApp.API.rewriteControlModel("grid", gridModelRewriter);
  }
}