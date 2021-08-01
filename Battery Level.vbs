Set objSWbemLocator = CreateObject("WbemScripting.SWbemLocator")
Set objSWbemServices = objSWbemLocator.ConnectServer(".", "root\WMI")
Set colSWbemObjectSet = objSWbemServices.ExecQuery("SELECT * FROM BatteryFullChargedCapacity")

For Each objSWbemObject In colSWbemObjectSet
    intFullChargedCapacity = objSWbemObject.FullChargedCapacity
Next

boolDisplay = True

While (1)
    Set colSWbemObjectSet = objSWbemServices.ExecQuery("SELECT * FROM BatteryStatus")

    For Each objSWbemObject In colSWbemObjectSet
        boolCharging = objSWbemObject.Charging
        intRemainingCapacity = objSWbemObject.RemainingCapacity
    Next

    intRemainingPercent = CInt(intRemainingCapacity / intFullChargedCapacity * 100)

    If intRemainingPercent < 20 Then
        If Not(boolCharging) Then
            MsgBox "You might want to plug in your PC (" & intRemainingPercent & "%).", 4144, "Battery Level"
        End If
    ElseIf intRemainingPercent > 80 Then
        If boolCharging And boolDisplay Then
            boolDisplay = False
            MsgBox "You might want to unplug your PC (" & intRemainingPercent & "%).", 4144, "Battery Level"
        End If
    Else
        boolDisplay = True
    End If

    WScript.sleep 300000
WEnd
