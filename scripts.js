var amount = document.querySelector('#amount');
        var people = document.querySelector('#people');
        var tip = document.querySelector('#tip');
        var owed = document.querySelector('#owed');
        
        var calculationAmountOwed = function (){
        
            var tipAmount = tip.value.length > 0 ? parseFloat(tip.value) / 100 : 0;
            var perPerson = amount.value.length > 0 && people.value.length > 0 ? parseFloat(amount.value) / Math.ceil(people.value) : 0;
            var owed = Math.ceil(perPerson + (perPerson * tipAmount));
            
            return owed;
        };
        
        var changeHandler = function (event) {
            if (!event.target.closest('.tip-calculator')) return;  
            
            owed.innerHTML = 'You owe $' + calculationAmountOwed() + ' per person.';
        };
        
        document.addEventListener('input', changeHandler, false);