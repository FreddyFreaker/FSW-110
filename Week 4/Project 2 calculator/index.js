function showresult(choise){
        var n1=parseFloat(document.getElementById('num1').value);
        var n2=parseFloat(document.getElementById('num2').value);
        var r;
        var c=choise;
        
        switch(c)
                {
                case 'add':
                        r=n1+n2;
                        break;
                case 'sub':
                        r=n1-n2;
                        break;
                case 'mult':
                        r=n1*n2;
                        break;
                default:
                        break;
                                
                }
        document.getElementById('result').value=r;
        
                
        
        }


