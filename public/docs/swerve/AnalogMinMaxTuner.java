package org.firstinspires.ftc.teamcode.pedro.swerve;

import com.qualcomm.hardware.lynx.LynxModule;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.AnalogInput;

import org.firstinspires.ftc.teamcode.pedro.Constants;

import java.util.List;

/**
 * Tuning OpMode to get the min and max encoder values for swerve pods
 * @author Kabir Goyal
 * @author Havish Sripada
 */
@TeleOp
public class AnalogMinMaxTuner extends OpMode {
    //populate the below with your names for the servos and encoders
    public String[] encoderNames = {Constants.leftFront.turnEncoderName.get(),
            Constants.rightFront.turnEncoderName.get(), Constants.leftBack.turnEncoderName.get(),
            Constants.rightBack.turnEncoderName.get()};
    public AnalogInput[] encoders = new AnalogInput[encoderNames.length];
    public double[] minVoltages = new double[encoderNames.length];
    public double[] maxVoltages = new double[encoderNames.length];

    public List<LynxModule> lynxModules; //js to improve loop times a bit yk

    @Override
    public void init_loop() {
        telemetry.addLine("Press START. Then, Spin each pod slowly for 4 to 5 full rotations.\n" +
                "The OpMode will keep track of the min and max voltages seen so far and print them to telemetry.");
        telemetry.update();
    }

    @Override
    public void init() {
        lynxModules = hardwareMap.getAll(LynxModule.class);
        for (LynxModule hub : lynxModules) {
            hub.setBulkCachingMode(LynxModule.BulkCachingMode.MANUAL);
        }

        for (int i = 0; i < encoders.length; i++)  {
            encoders[i] = hardwareMap.get(AnalogInput.class, encoderNames[i]);
            minVoltages[i] = 5; //bigger value than should ever be read
        }
    }

    /**
     * This runs the OpMode, updating the Follower as well as printing out the debug statements to
     * the Telemetry, as well as the FTC Dashboard.
     */
    @Override
    public void loop() {
        for (LynxModule hub : lynxModules) {
            hub.clearBulkCache();
        }

        telemetry.addLine("Spin each pod slowly for 4 to 5 full rotations.\n" +
                "The OpMode will keep track of the min and max voltages seen so far and print them to telemetry.\n\n");

        for (int i = 0; i < encoders.length; i++) {
            double currentVoltage = encoders[i].getVoltage();
            minVoltages[i] = Math.min(minVoltages[i], currentVoltage);
            maxVoltages[i] = Math.max(maxVoltages[i], currentVoltage);
            telemetry.addData(encoderNames[i] + "min value:", minVoltages[i]);
            telemetry.addData(encoderNames[i] + "max value:", maxVoltages[i]);
            telemetry.addLine("");
        }

        telemetry.update();
    }
}