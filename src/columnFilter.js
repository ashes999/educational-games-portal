// Filter games into two columns
app.filter('columnFilter', function()
{
    return function(items, columnNumber)
    {                   
        var toReturn = [];
        // Start from 0, because the first item is already jumbofied
        for (var i = 1; i < items.length; i++)
        {
            if (i % 2 == columnNumber)
            {
                toReturn.push(items[i]);
            }
        }
        return toReturn;
    }
});