package org.firstinspires.ftc.teamcode.pedro.swerve;

import com.pedropathing.follower.Follower;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

import org.firstinspires.ftc.teamcode.pedro.Constants;

/**
 * This is the SwerveOffsetsTest
 * You should use this to check how good your swerve angle offsets are and if your motor directions are correct
 * @author Kabir Goyal
 * @author Havish Sripada
 */
@TeleOp
public class SwerveOffsetsTuner extends OpMode {
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


        telemetry.addLine("This OpMode will run all four swerve pods in the direction they think is forward"
                + "\nensure your bot is not on the ground while running");
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

        follower.manual(0.25, 0, 0);
        follower.update();

        if (debugStringEnabled) {
            telemetry.addLine("Drivetrain Debug String:\n" +
                    follower.drivetrain.debugString());
        }
        telemetry.update();
    }
}