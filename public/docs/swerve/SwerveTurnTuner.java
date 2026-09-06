package org.firstinspires.ftc.teamcode.pedro.swerve;

import com.pedropathing.follower.Follower;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

import org.firstinspires.ftc.teamcode.pedro.Constants;

/**
 * This is the SwerveTurnTest
 * You should use this to check your encoder directions and x/y pod offsets
 * @author Kabir Goyal
 * @author Havish Sripada
 *
 */
@TeleOp
public class SwerveTurnTuner extends OpMode {
    boolean debugStringEnabled = false;
    Follower follower;

    @Override
    public void init() {
        follower = Constants.create(hardwareMap);
    }

    /** This initializes the PoseUpdater, the drive motors, and the Panels telemetry. */
    @Override
    public void init_loop() {
        if (gamepad1.aWasPressed() || gamepad2.aWasPressed()) {
            debugStringEnabled = !debugStringEnabled;
        }


        telemetry.addLine("This OpMode will run all four swerve pods in their turning direction (perpendicular to the center of the robot) "
                + "\nrun this once off the ground to check servo directions and motor directions before testing on the ground");
        telemetry.addLine("Drivetrain debug string " + (((debugStringEnabled) ? "enabled" : "disabled")) +
                " (press gamepad a to toggle)");
        telemetry.update();
        follower.update();
    }

    @Override
    public void start() {
        follower.update();
    }

    /**
     * This updates the robot's pose estimate, the simple drive, and updates the
     * Panels telemetry with the robot's position as well as draws the robot's position.
     */
    @Override
    public void loop() {
        if (gamepad1.aWasPressed() || gamepad2.aWasPressed()) {
            debugStringEnabled = !debugStringEnabled;
        }

        follower.manual(0, 0, 0.25);
        follower.update();

        if (debugStringEnabled) {
            telemetry.addLine("Drivetrain Debug String:\n" +
                    follower.drivetrain.debugString());
        }
        telemetry.update();
    }
}
